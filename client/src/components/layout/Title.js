import React from 'react'

const getStyles = () => ({
  title: {
    fontSize: '3rem',
    padding: '1.5rem',
    border: '.25rem black solid',
    marginBottom: '2rem'
  }
})

const Title = () => {
  const styles = getStyles()

  return <h1 style={styles.title}>Disney Characters and Device with GraphQL</h1>
}
export default Title
