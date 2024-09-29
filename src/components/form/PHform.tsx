import React from 'react'
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type ResolverProps = {
    resolver?: any,
    defaultValues?: Record<string, any>
}

type PropsTypes = {
    children: React.ReactNode,
    onSubmit: SubmitHandler<FieldValues>,
    resolver?: any
} & ResolverProps

function PHform({ children, onSubmit, defaultValues, resolver }: PropsTypes) {
    const resolverConfig: ResolverProps = {}

    if (defaultValues) {
        resolverConfig["defaultValues"] = defaultValues
    }
    if (resolver) {
        resolverConfig["resolver"] = resolver
    }

    const methods = useForm(resolverConfig)

  
  const {handleSubmit,reset}=methods


 const submit:SubmitHandler<FieldValues> = (data) => {
    onSubmit(data)
    reset()
}

  return (
    <FormProvider {...methods}>
    <form onSubmit={handleSubmit(submit)}>
        {children}
    </form>
  </FormProvider>
  )
}

export default PHform