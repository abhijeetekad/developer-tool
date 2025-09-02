import { Card } from '@/components/ui/card'
import MonacoEditor from '@monaco-editor/react'
import { useTheme } from '@/components/theme/ThemeProvider'

export function Editor({
  value,
  onChange,
  language = 'json',
  height = '400px',
  readOnly = false,
}) {
  const { theme } = useTheme()

  return (
    <Card className="overflow-hidden border">
      <MonacoEditor
        height={height}
        language={language}
        value={value}
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        options={{
          minimap: { enabled: false },
          lineNumbers: 'on',
          readOnly,
          scrollBeyondLastLine: false,
          fontSize: 14,
          tabSize: 2,
          automaticLayout: true,
          fontFamily: 'monospace',
          padding: { top: 16, bottom: 16 },
        }}
        onChange={onChange}
      />
    </Card>
  )
}