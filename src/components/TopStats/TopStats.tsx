import * as R from 'ramda'
import React from 'react'

interface Props {
  noOfContributions: any
}

class TopStats extends React.Component<Props, null> {
  constructor(props: Props) {
    super(props)
  }

  public componentDidUpdate() {
    const { noOfContributions } = this.props

    if (noOfContributions > 0 && !R.isEmpty(R.prop('$', window))) {
      const $: any = R.prop('$', window)
      $('.count-number').counterUp({
        delay: 10,
        time: 5000,
      })
    }
  }

  public render() {
    const { noOfContributions } = this.props

    return (
      noOfContributions > 0 && (
        <>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="statistic-box statistic-filled-3">
              <h2>
                <span className="count-number">{noOfContributions}</span>
              </h2>
              <div className="small">Contributions</div>
              <i className="ti-pencil statistic_icon" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="statistic-box statistic-filled-1">
              <h2>
                <span className="count-number">12</span>
              </h2>
              <div className="small">Learnings</div>
              <i className="ti-star statistic_icon" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="statistic-box statistic-filled-2">
              <h2>
                <span className="count-number">15</span>
              </h2>
              <div className="small">Projects</div>
              <i className="ti-briefcase statistic_icon" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div className="statistic-box statistic-filled-4">
              <h2>
                <span className="count-number">7</span>
              </h2>
              <div className="small">Customers</div>
              <i className="ti-user statistic_icon" />
            </div>
          </div>
        </>
      )
    )
    return null
  }
}
export default TopStats
