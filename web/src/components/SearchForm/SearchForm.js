import { navigate, routes } from '@redwoodjs/router'
import { Form, Label, TextField, FieldError, Submit } from '@redwoodjs/forms'

const SearchForm = () => {
  const onSubmit = (data) => {
    console.log(data)
    navigate(routes.search({ s: encodeURIComponent(data.search) }))
  }
  return (
    <>
      <Form onSubmit={onSubmit} className="-my-2">
        <Label name="search" className="sr-only" errorClassName="label error" />
        <TextField
          name="search"
          className="py-1 px-3"
          errorClassName="input error"
          placeholder="Search"
          validation={{ required: true }}
        />
        <FieldError name="search" className="error-message" />

        <Submit className="button">Search</Submit>
      </Form>
    </>
  )
}

export default SearchForm
