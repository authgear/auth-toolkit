import { Shield, Key, Hash, FileText, Smartphone } from "lucide-react"
import { LucideIcon } from "lucide-react"

export const ICON_MAP = {
  Shield,
  Key,
  Hash,
  FileText,
  Smartphone,
} as const

export interface Tool {
  id: number
  title: string
  description: string
  url: string
  icon: LucideIcon
}

export interface EducationalLink {
  title: string
  url: string
}
