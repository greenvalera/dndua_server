interface CreateClassAttrs {
  id: string
  pageId: string
}

interface SubclassDto {
  nameOrigin: string
  nameTranslated: string
  description: string
  source: string
}

type CreateSubclassAttrs = SubclassDto & {
  id: string
}

export {
  CreateClassAttrs,
  CreateSubclassAttrs,
  SubclassDto,
}

