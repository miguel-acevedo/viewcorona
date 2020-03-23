import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Timeline from '../components/Timeline'
import { GetStaticProps } from 'next'
import { timelineData } from '../utils/timeline-data'

import { Event } from '../interfaces'

type Props = {
    items: Event[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Corona Virus Timeline">
    <Header title="Corona Virus"/>
    <Timeline items={items}/>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: Event[] = timelineData
    return { props: { items } }
  }

export default WithStaticProps