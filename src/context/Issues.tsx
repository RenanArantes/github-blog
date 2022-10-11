import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../lib/axios'

interface Issue {
  id: number
  url: string
  title: string
  body: string
  state: 'open' | 'closed'
  created_at: string
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: () => void
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssue] = useState<Issue[]>([])

  async function fetchIssues() {
    console.log('fetching issues')
    const response = await api.get(
      '/search/issues?q=%20repo:RenanArantes/github-blog',
    )

    const fetchedIssues: Issue[] = response.data.items

    setIssue(fetchedIssues)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssueContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
