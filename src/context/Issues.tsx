import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import api from '../lib/axios'

interface Issue {
  id: number
  url: string
  title: string
  body: string
  state: 'open' | 'closed'
  created_at: string
  user: {
    name: string
    login: string
  }
  comments: number
  number: number
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (query?: string | number) => void
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (query?: string | number) => {
    const storagedIssues = localStorage.getItem('!@github-blog:issues')

    if (storagedIssues) {
      console.log(
        'pegando do localStorage para evitar muitos requests na API\n' +
          'do GitHub durante o desenvolvimento',
      )
      setIssues(JSON.parse(storagedIssues))
    } else {
      console.log('fetching issues')

      let fetchedIssues: Issue[] = []

      if (typeof query === 'string') {
        console.log('tem parametro string')
        const response = await api.get(
          `/search/issues?q=${query}%20repo:RenanArantes/github-blog`,
        )

        fetchedIssues = response.data.items
        console.log(fetchedIssues)
      } else if (typeof query === 'number') {
        console.log('tem parametro number')
        const response = await api.get(
          `/repos/RenanArantes/github-blog/issues/${query}`,
        )

        fetchedIssues = response.data.items
        console.log(fetchedIssues)
      } else {
        console.log('nao tem parametro')
        const response = await api.get(
          `/search/issues?q=%20repo:RenanArantes/github-blog`,
        )

        fetchedIssues = response.data.items
      }

      setIssues(fetchedIssues)
      console.log(issues)
      // localStorage.setItem('@github-blog:issues', JSON.stringify(fetchedIssues))
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssueContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
