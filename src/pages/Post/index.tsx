import { PostInfo } from './components/PostInfo'
import { IssueContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const md = `**As principais lições e dicas compiladas para quem está começando na
programação ou migrando para a área.**\r\n\r\n*Texto por Camila
Coelho\r\n\r\nHoje devs são peças fundamentais de todo negócio, estão
nas startups e nas pequenas e médias empresas que buscam soluções
tecnológicas para seus produtos e serviços.`

export function Post() {
  return (
    <div>
      <PostInfo />
      <IssueContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
      </IssueContainer>
    </div>
  )
}
