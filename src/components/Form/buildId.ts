const buildErrorId = (name: string, formId?: string) => {
  return (formId || "form") + "-error-" + name
}

const buildFieldId = (name: string, formId?: string) => {
  return (formId || "form") + "-control-" + name
}

const buildHelpTextId = (name: string, formId?: string) => {
  return (formId || "form") + "-help-text-" + name
}

export { buildErrorId, buildFieldId, buildHelpTextId }
