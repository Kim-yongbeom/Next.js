import dynamic from "next/dynamic"
import { EditorProps } from "react-draft-wysiwyg"

const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
        ssr: false,
    }
)

export default function CustomEditor() {
  return (
    <Editor/>
  )
}
