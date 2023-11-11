const { Book } = require("../models");
const bookData = [


{
title: "About the Brothers Grimm",
},
{
title: "Ashputtal",
},
{
title: "Briar Rose",
},
{
title: "Clever Elsie",
},
{
title: "Hansel and Gretel",
},
{
title: "Jorinda and Jorindel",
},
{
title: "King Grisly-Beard",
},
{
title: "Mother Holle",
},
{
title: "Old Sultan",
},
{
title: "Snowdrop",
},
{
title: "The Dog and the Sparrow",
},
{
title: "The Elves and the Shoemaker",
},
{
title: "The Fisherman and his Wife",
},
{
title: "The Twelve Dancing Princesses",
},
]
const seedComments = () => Book.bulkCreate(bookData);
module.exports = seedComments;