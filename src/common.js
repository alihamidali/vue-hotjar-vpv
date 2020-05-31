import $ from 'jquery'

const triggerHotjarVPV =  function (str) {
  $(document).ready(function () {
    hj('vpv', str);
    console.log(str);
  })
}

export default triggerHotjarVPV
