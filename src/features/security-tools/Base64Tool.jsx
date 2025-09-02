import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Editor } from '@/components/common/Editor'
import { CopyButton } from '@/components/common/CopyButton'

export function Base64Tool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState(null)

  const encode = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      const encoded = btoa(input)
      setOutput(encoded)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid input for Base64 encoding')
      setOutput('')
    }
  }

  const decode = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      const decoded = atob(input)
      setOutput(decoded)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid Base64 string')
      setOutput('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Base64 Encoder/Decoder</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Input */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Input</CardTitle>
            <CopyButton value={input} />
          </CardHeader>
          <CardContent>
            <Editor
              value={input}
              onChange={setInput}
              language="text"
              height="400px"
            />
          </CardContent>
        </Card>

        {/* Output */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Output</CardTitle>
            <CopyButton value={output} />
          </CardHeader>
          <CardContent>
            <Editor
              value={output}
              onChange={setOutput}
              language="text"
              height="400px"
              readOnly
            />
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button onClick={encode}>Encode</Button>
        <Button variant="outline" onClick={decode}>Decode</Button>
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
