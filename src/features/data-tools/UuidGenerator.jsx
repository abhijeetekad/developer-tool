import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CopyButton } from '@/components/common/CopyButton'

export function UuidGenerator() {
  const [uuids, setUuids] = useState([uuidv4()])

  const generateUuid = () => {
    setUuids(prev => [uuidv4(), ...prev].slice(0, 10)) // Keep last 10 UUIDs
  }

  const clearHistory = () => {
    setUuids([uuidv4()])
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">UUID Generator</h1>
      </div>

      <div className="space-y-4">
        {/* Latest UUID */}
        <Card className="bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Latest UUID</CardTitle>
            <CopyButton value={uuids[0]} />
          </CardHeader>
          <CardContent>
            <p className="font-mono text-lg">{uuids[0]}</p>
          </CardContent>
        </Card>

        {/* History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {uuids.slice(1).map((uuid, index) => (
                <div key={uuid} className="flex items-center justify-between p-2 rounded-md hover:bg-accent">
                  <code className="font-mono">{uuid}</code>
                  <CopyButton value={uuid} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button onClick={generateUuid}>Generate New UUID</Button>
        <Button variant="outline" onClick={clearHistory}>Clear History</Button>
      </div>
    </div>
  )
}
