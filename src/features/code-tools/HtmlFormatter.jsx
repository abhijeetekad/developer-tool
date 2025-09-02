import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { beautify } from 'js-beautify'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Editor } from '@/components/common/Editor'
import { CopyButton } from '@/components/common/CopyButton'

export function HtmlFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState(null)

  const formatHtml = (indent = 2) => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      const formatted = beautify.html(input, {
        indent_size: indent,
        indent_char: ' ',
        max_preserve_newlines: 2,
        preserve_newlines: true,
        keep_array_indentation: false,
        break_chained_methods: false,
        indent_scripts: 'normal',
        brace_style: 'collapse',
        space_before_conditional: true,
        unescape_strings: false,
        jslint_happy: false,
        end_with_newline: true,
        wrap_line_length: 0,
        indent_inner_html: true,
        comma_first: false,
        e4x: false,
        indent_empty_lines: false
      })

      setOutput(formatted)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid HTML')
      setOutput('')
    }
  }

  const minifyHtml = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      // Simple HTML minification
      const minified = input
        .replace(/\\n/g, '') // Remove newlines
        .replace(/[\\t ]+\\</g, '<') // Remove spaces before tags
        .replace(/\\>[ \\t]+\\</g, '><') // Remove spaces between tags
        .replace(/\\>[ \\t]+$/g, '>') // Remove spaces after tags
        .replace(/<!--.*?-->/g, '') // Remove comments
        .trim()

      setOutput(minified)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid HTML')
      setOutput('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">HTML Formatter</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Input */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Input HTML</CardTitle>
            <CopyButton value={input} />
          </CardHeader>
          <CardContent>
            <Editor
              value={input}
              onChange={setInput}
              language="html"
              height="400px"
            />
          </CardContent>
        </Card>

        {/* Output */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Formatted HTML</CardTitle>
            <CopyButton value={output} />
          </CardHeader>
          <CardContent>
            <Editor
              value={output}
              onChange={setOutput}
              language="html"
              height="400px"
              readOnly
            />
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button onClick={() => formatHtml(2)}>Format</Button>
        <Button variant="outline" onClick={minifyHtml}>Minify</Button>
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
