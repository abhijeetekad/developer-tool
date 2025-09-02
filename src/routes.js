import { JsonFormatter } from '@/features/json-tools/JsonFormatter'
import { HtmlFormatter } from '@/features/code-tools/HtmlFormatter'
import { JavaScriptFormatter } from '@/features/code-tools/JavaScriptFormatter'
import { CssFormatter } from '@/features/code-tools/CssFormatter'
import { JwtDecoder } from '@/features/security-tools/JwtDecoder'
import { Base64Tool } from '@/features/security-tools/Base64Tool'
import { UuidGenerator } from '@/features/data-tools/UuidGenerator'

export const routes = [
  {
    id: 'json-formatter',
    path: '/',
    name: 'JSON Formatter',
    icon: '🔧',
    component: JsonFormatter,
    category: 'json'
  },
  {
    id: 'html-formatter',
    path: '/html-formatter',
    name: 'HTML Formatter',
    icon: '🗂️',
    component: HtmlFormatter,
    category: 'code'
  },
  {
    id: 'js-formatter',
    path: '/js-formatter',
    name: 'JavaScript Formatter',
    icon: '📝',
    component: JavaScriptFormatter,
    category: 'code'
  },
  {
    id: 'css-formatter',
    path: '/css-formatter',
    name: 'CSS Formatter',
    icon: '🎨',
    component: CssFormatter,
    category: 'code'
  },
  {
    id: 'jwt-decoder',
    path: '/jwt-decoder',
    name: 'JWT Decoder',
    icon: '🔑',
    component: JwtDecoder,
    category: 'security'
  },
  {
    id: 'base64',
    path: '/base64',
    name: 'Base64 Encoder/Decoder',
    icon: '🔄',
    component: Base64Tool,
    category: 'security'
  },
  {
    id: 'uuid',
    path: '/uuid',
    name: 'UUID Generator',
    icon: '🎲',
    component: UuidGenerator,
    category: 'data'
  }
]

export const categories = {
  json: { name: 'JSON Tools', icon: '🔧' },
  code: { name: 'Code Tools', icon: '📝' },
  security: { name: 'Security Tools', icon: '🔒' },
  data: { name: 'Data Tools', icon: '📊' }
}
