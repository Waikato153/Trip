const images = {
    1:  require('./1.png'),
    2:  require('./2.png'),
    3:  require('./3.png'),
    4:  require('./4.png'),
    5:  require('./5.png'),
    6:  require('./6.png'),
    7:  require('./7.png'),
};

export default function randomImage() {
    let min = 1;
    let max = 7;
    let random = Math.floor(Math.random() * (max-min+1) ) + min;

    return images[random]
}