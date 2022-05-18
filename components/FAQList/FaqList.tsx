import React from 'react'
import { FAQ } from 'config/types'
import { FaqDetail } from './FaqDetail'

interface FaqListProps {
  faqs: FAQ[]
}

export const FaqList = ({ faqs }: FaqListProps) => (
  <div>
    {faqs.map((faq, i) => {
      if (faq.Category != 'online') return <FaqDetail key={i} faq={faq} />
    })}
  </div>
)
