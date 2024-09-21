import { useParams } from 'react-router-dom'

export default function Document(): React.JSX.Element {
  // 获取路由参数
  const { documentId } = useParams()
  return (
    <>
      <div>文档 {documentId}</div>
    </>
  )
}
