import Link from 'next/link'
import Layout from '../components/Layout'

const Apps = () => {
  return (
    <Layout>
      <h1>This is an apps page</h1>
      <Link href='/apps/directory-tree-editor'>
        Directory Tree Editor
      </Link>
    </Layout>
  )
}

export default Apps