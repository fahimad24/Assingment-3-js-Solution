function newPrice(currentPrice, discount) {
    if(typeof(currentPrice) === 'number' && typeof(discount) === 'number') {
        if(0 <= discount && discount <= 100) {
            return (currentPrice * (1 - discount / 100)).toFixed(3);
        } else {
            return "Invalid"
        }
    }else {
        return "Invalid"
    }
}
