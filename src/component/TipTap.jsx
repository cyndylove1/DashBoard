import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { MdFormatBold } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import Underline from '@tiptap/extension-underline'
import { MdFormatUnderlined } from "react-icons/md";

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <MdFormatBold  className='border-1 border-grey'/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <MdFormatItalic/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        < MdFormatUnderlined/>
      </button>
      
    </>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name ,Underline] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
Underline]

const content = ``

const TipTap = () => {
  return (
    <div className='p-6 border-t-1 border-grey bg-white rounded-lg w-40 h-25 outline-none'>
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>

    </div>
    
  )
}
export default TipTap
