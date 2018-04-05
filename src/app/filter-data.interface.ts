export interface FilterData {
  employee: TermFilter,
  project: TermFilter,
  start?: DateFilter,
  end?: DateFilter
}

export interface TermFilter {
  entity: string,
  filter?: string
}

export interface DateFilter {
  entity: string,
  filter?: number
}
