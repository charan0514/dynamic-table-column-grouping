import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    getIsFetching,
 } from '../selectors'

import * as loginActions from '../actions'


const mapStateToProps = (state) => {
  return {
      isLoading: getIsFetching(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...loginActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
