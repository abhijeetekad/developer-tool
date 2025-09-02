import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { jwtDecode } from 'jwt-decode'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Editor } from '@/components/common/Editor'
import { CopyButton } from '@/components/common/CopyButton'

export function JwtDecoder() {
  const [input, setInput] = useState('')
  const [header, setHeader] = useState('')
  const [payload, setPayload] = useState('')
  const [error, setError] = useState(null)

  const decodeJwt = () => {
    try {
      if (!input.trim()) {
        setHeader('')
        setPayload('')
        setError(null)
        return
      }

      // Decode header
      const headerPart = input.split('.')[0]
      const decodedHeader = JSON.parse(atob(headerPart))
      setHeader(JSON.stringify(decodedHeader, null, 2))

      // Decode payload
      const decoded = jwtDecode(input)
      setPayload(JSON.stringify(decoded, null, 2))
      
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JWT token')
      setHeader('')
      setPayload('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">JWT Decoder</h1>
      </div>

      <div className="space-y-4">
        {/* Input */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">JWT Token</CardTitle>
            <CopyButton value={input} />
          </CardHeader>
          <CardContent>
            <Editor
              value={input}
              onChange={setInput}
              language="text"
              height="100px"
            />
          </CardContent>
        </Card>

        {/* Header */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Header</CardTitle>
            <CopyButton value={header} />
          </CardHeader>
          <CardContent>
            <Editor
              value={header}
              onChange={setHeader}
              language="json"
              height="200px"
              readOnly
            />
          </CardContent>
        </Card>

        {/* Payload */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Payload</CardTitle>
            <CopyButton value={payload} />
          </CardHeader>
          <CardContent>
            <Editor
              value={payload}
              onChange={setPayload}
              language="json"
              height="200px"
              readOnly
            />
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button onClick={decodeJwt}>Decode</Button>
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
