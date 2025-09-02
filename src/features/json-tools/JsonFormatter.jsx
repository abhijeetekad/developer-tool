import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Editor } from '@/components/common/Editor'
import { CopyButton } from '@/components/common/CopyButton'

export function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState(null)

  const formatJson = (indent = 2) => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, indent))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
      setOutput('')
    }
  }

  const minifyJson = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
      setOutput('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">JSON Formatter</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Input */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Input JSON</CardTitle>
            <CopyButton value={input} />
          </CardHeader>
          <CardContent>
            <Editor
              value={input}
              onChange={setInput}
              language="json"
              height="400px"
            />
          </CardContent>
        </Card>

        {/* Output */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Formatted JSON</CardTitle>
            <CopyButton value={output} />
          </CardHeader>
          <CardContent>
            <Editor
              value={output}
              onChange={setOutput}
              language="json"
              height="400px"
              readOnly
            />
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button onClick={() => formatJson(2)}>Format</Button>
        <Button variant="outline" onClick={minifyJson}>Minify</Button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-4 w-4" />
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}
