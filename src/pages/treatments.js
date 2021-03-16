import React from 'react'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'

import { treatmentsData } from '../data/treatmentsData'

import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { IoIosArrowDropup } from 'react-icons/io'

const CollapsibleStyles = styled.div`
  .Collapsible {
    margin-bottom: 3rem;
    &__trigger {
      h3 {
        margin-left: 3rem;
        margin-bottom: 0;
      }
      &.is-open {
        min-height: 256px;
        .icon {
          top: 104px;
          transform: rotateZ(180deg);
        }
      }

      position: relative;
      border-radius: 10px;
      display: flex;
      align-items: center;

      min-height: 128px;
      background-image: linear-gradient(
          to right,
          var(--gradient-primary),
          var(--gradient-secondary)
        ),
        ${props => `url(${props.bg})`};
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      transition: min-height 300ms;
      .icon {
        height: 48px;
        width: 48px;
        position: absolute;
        right: 3rem;
        top: 40px;
        display: block;
        transition: all 300ms;
      }
    }

    @media (max-width: 640px) {
      &__trigger {
        min-height: 96px;
        &.is-open {
          min-height: 192px;
          .icon {
            top: 78px;
          }
        }
        h3 {
          width: 75%;
          margin-left: 1.5rem;
        }
        .icon {
          height: 36px;
          width: 36px;
          top: 30px;
          right: 1rem;
        }
      }
    }
  }
`

export default function TreatmentsPage() {
  return (
    <main>
      <SEO title="Treatments"></SEO>

      <PageHero title="Treatments" />

      <div className="wrapper-column">
        {treatmentsData.map(treatment => {
          return (
            <CollapsibleStyles bg={treatment.image}>
              <Collapsible
                key={`treatment-${treatment.id}`}
                trigger={
                  <>
                    <h3>{treatment.name}</h3>
                    <IoIosArrowDropup className="icon" />
                  </>
                }
              >
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: treatment.description }}
                />
              </Collapsible>
            </CollapsibleStyles>
          )
        })}
      </div>
    </main>
  )
}
