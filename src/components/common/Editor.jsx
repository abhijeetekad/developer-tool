import { Card } from '@/components/ui/card'
import MonacoEditor from '@monaco-editor/react'

export function Editor({
  value,
  onChange,
  language = 'json',
  height = '400px',
  readOnly = false,
}) {
  return (
    <Card className="overflow-hidden border">
      <MonacoEditor
        height={height}
        language={language}
        value={value}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          lineNumbers: 'on',
          readOnly,
          scrollBeyondLastLine: false,
          fontSize: 14,
          tabSize: 2,
          automaticLayout: true,
        }}
        onChange={onChange}
      />
    </Card>
  )
}