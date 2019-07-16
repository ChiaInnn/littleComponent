new Vue({
  el: '#cartList',
  data: {
    commidy: [{
      id: 1,
      commidyName: 'iPhone7',
      price: '6188',
      quantity: 4,
      isChoosed: false
    }, {
      id: 2,
      commidyName: 'ipad Pro',
      price: '5888',
      quantity: 8,
      isChoosed: false
    }, {
      id: 3,
      commidyName: 'MacBook Pro',
      price: '21488',
      quantity: 1,
      isChoosed: false
    }
    ]

  },
  computed: {
    comTotalPrice: function () {
      var totalPrice = 0
      for (var i = 0; i < this.commidy.length; i++) {
        if (this.commidy[i].isChoosed == true) {
          totalPrice += this.commidy[i].price * this.commidy[i].quantity;
        }
      }
      return totalPrice.toString().replace(/\B(?=(\d{3})+$)/g,',');
    }
  },
  methods: {
    deleteCommidy: function (index) {
      return this.commidy.splice(index, 1);
    },
    addQuantity:function (index) {
      return this.commidy[index].quantity++;
    },
    minusQuantity:function (index) {
      if (this.commidy[index].quantity > 1) {
        return this.commidy[index].quantity--;
      } else {
        alert('已经最少了哦！');
      }
    },
    chooseAll: function () {
      for (var i = 0; i < this.commidy.length; i++) {
        this.commidy[i].isChoosed = true;
      }
    },
    modifyChoose: function (index) {
      return !this.commidy[index].isChoosed;
    }
  }
})
