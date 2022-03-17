const buildErrorId = (name: string, formId?: string) => {
  return (formId || "form") + "-error-" + name
}

const buildFieldId = (name: string, formId?: string) => {
  return (formId || "form") + "-control-" + name
}

const buildHelpId = (name: string, formId?: string) => {
  return (formId || "form") + "-help-" + name
}

export { buildErrorId, buildFieldId, buildHelpId }
