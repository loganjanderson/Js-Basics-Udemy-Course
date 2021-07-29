let restaurant = {
    name: 'Asado',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
     let seatsLeft = this.guestCapacity - this.guestCount
     return partySize <= seatsLeft
},
seatParty: function (partySize) {
    return this.guestCount += partySize
},
removeParty: function (partySize) {
    return this.guestCount -= partySize
}

}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4), restaurant.guestCount)
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4), restaurant.guestCount)
