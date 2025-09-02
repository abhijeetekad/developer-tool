import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { beautify } from 'js-beautify'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Editor } from '@/components/common/Editor'
import { CopyButton } from '@/components/common/CopyButton'

export function CssFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState(null)

  const formatCss = (indent = 2) => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      const formatted = beautify.css(input, {
        indent_size: indent,
        indent_char: ' ',
        max_preserve_newlines: 2,
        preserve_newlines: true,
        end_with_newline: true,
        wrap_line_length: 0,
        indent_empty_lines: false
      })

      setOutput(formatted)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid CSS')
      setOutput('')
    }
  }

  const minifyCss = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      // Simple CSS minification
      const minified = input
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/\s*([{};,])\s*/g, '$1') // Remove spaces around special characters
        .replace(/;}/g, '}') // Remove last semicolon of rule
        .trim()

      setOutput(minified)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid CSS')
      setOutput('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">CSS Formatter</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Input */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Input CSS</CardTitle>
            <CopyButton value={input} />
          </CardHeader>
          <CardContent>
            <Editor
              value={input}
              onChange={setInput}
              language="css"
              height="400px"
            />
          </CardContent>
        </Card>

        {/* Output */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Formatted CSS</CardTitle>
            <CopyButton value={output} />
          </CardHeader>
          <CardContent>
            <Editor
              value={output}
              onChange={setOutput}
              language="css"
              height="400px"
              readOnly
            />
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button onClick={() => formatCss(2)}>Format</Button>
        <Button variant="outline" onClick={minifyCss}>Minify</Button>
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