import styled from "@emotion/styled"
import dynamic from "next/dynamic"
import { Dispatch, SetStateAction } from "react"
import { EditorProps, EditorState } from "react-draft-wysiwyg"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Button from "./Button"

const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
        ssr: false,
    }
)

export default function CustomEditor(
      {editorState, readOnly = false, onEditorStateChange, onSave}: 
      {editorState: EditorState, readOnly?: boolean, onEditorStateChange ?: Dispatch<SetStateAction<EditorState | undefined>>, onSave : () => void}
    ) 
  {
  return (
    <Wrapper>
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
    />
    {!readOnly && <Button onClick={onSave}>Save</Button>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 16px;
`;