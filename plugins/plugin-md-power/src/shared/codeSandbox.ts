import type { SizeOptions } from './size.js'

export interface CodeSandboxTokenMeta extends SizeOptions {
  user?: string
  id?: string
  layout?: string
  type?: 'share' | 'embed'
  title?: string
  filepath?: string
  navbar?: boolean
  console?: boolean
}
