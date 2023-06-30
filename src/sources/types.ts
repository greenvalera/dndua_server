interface SourceCreateDto {
  name: string
  shortname: string | null
  isOfficial: boolean
}

type SourceCreateAttrs = SourceCreateDto & {
  id: string
}

export {
  SourceCreateDto,
  SourceCreateAttrs
}