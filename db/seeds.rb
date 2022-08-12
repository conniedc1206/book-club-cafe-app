# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Destroying previous data..."
Membership.destroy_all
Membership.reset_pk_sequence
BookClub.destroy_all
BookClub.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

puts "Seeding Users..."
10.times do
    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        avatar: Faker::LoremFlickr.image,
        bio: Faker::Lorem.sentence,
    )
end

puts "Adding BookClubs..."
BookClub.create([
    {
        club_name: "Group 1", 
        title: "Cam Jansen and The Mystery of the Stolen Diamonds", 
        author: "David A. Adler", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51zD8-wh1sL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", 
        desc: "Can Cam help catch the diamond thief? Cam and her friend Eric are sitting at the mall when the jewelry store is robbed. Cam sees the thief, but the police arrest the wrong person. Now it's up to Cam to catch the real criminal!", 
        genre: "Mystery", 
        url: "https://www.amazon.com/Cam-Jansen-Mystery-Stolen-Diamonds/dp/0142400106/ref=sr_1_1?crid=3TQWK4NFWM6X5&keywords=Cam+Jansen+and+the+Mystery+of+the+Stolen+Diamonds&qid=1660155378&s=books&sprefix=cam+jansen+and+the+mystery+of+the+stolen+diamonds%2Cstripbooks%2C101&sr=1-1", 
        reading_level:"L"
    },
    {
        club_name: "Group 2", 
        title: "Magic Tree House: Dinosaurs Before Dark", 
        author: "Mary Pope Osborn", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51PSLKlvl6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", 
        desc: "Before Jack and Annie can find out, the mysterious tree house whisks them to the prehistoric past. Now they have to figure out how to get home. Can they do it before dark…or will they become a dinosaur's dinner?", 
        genre: "Fantasy", 
        url: "https://www.amazon.com/gp/product/0679824111/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0679824111&linkCode=as2&tag=hannahwilde-20&linkId=6146b6fe2795abdab66754e6a2186bb7", 
        reading_level:"M"
    },
    {
        club_name: "Group 3", 
        title: "Because of Winn-Dixie", 
        author: "Kate DiCamillo", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51ZEoen1UKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", 
        desc: "One summer's day, ten-year-old India Opal Buloni goes down to the local supermarket for some groceries—and comes home with a dog. But Winn-Dixie is no ordinary dog. It's because of Winn-Dixie that Opal begins to make friends. And it's because of Winn-Dixie that she finally dares to ask her father about her mother, who left when Opal was three. In fact, as Opal admits, just about everything that happens that summer is because of Winn-Dixie.", 
        genre: "Realistic Fiction", 
        url: "https://www.amazon.com/Because-Winn-Dixie-Kate-DiCamillo/dp/1536214353/ref=sr_1_1?keywords=because+of+winn+dixie&qid=1660157167&s=books&sprefix=because+of%2Cstripbooks%2C124&sr=1-1", 
        reading_level:"R"
    },
    {
        club_name: "Group 4", 
        title: "The Baby-sitters Club: Kristy's Great Idea", 
        author: "Raina Telgemeier", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51FUHvwk0ZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", 
        desc: "Kristy, Mary Anne, Claudia, and Stacey are best friends and founding members of The Baby-sitters Club. Whatever comes up -- cranky toddlers, huge dogs, scary neighbors, prank calls -- you can count on them to save the day. Baby-sitting isn't always easy, and neither is dealing with strict parents, new families, fashion emergencies, and mysterious secrets. But no matter what, the BSC have what they need most: friendship.", 
        genre: "Graphic Novel", 
        url: "https://www.amazon.com/Kristys-Great-Idea-Full-Color-Baby-Sitters/dp/0545813875/ref=sr_1_7?keywords=babysitters+club+graphic+novels&qid=1660239373&sprefix=babysi%2Caps%2C150&sr=8-7", 
        reading_level:"Q"
    },
    {
        club_name: "Group 5", 
        title: "Meet Yasmin!", 
        author: "Saadia Faruqi", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51i6+67taoL._SX375_BO1,204,203,200_.jpg", 
        desc: "Meet Yasmin! Yasmin is a spirited second-grader who's always on the lookout for those aha moments to help her solve life's little problems. Taking inspiration from her surroundings and her big imagination, she boldly faces any situation, assuming her imagination doesn't get too big, of course! A creative thinker and curious explorer, Yasmin and her multi-generational Pakistani American family will delight and inspire readers.", 
        genre: "Realistic Fiction", 
        url: "https://www.amazon.com/Meet-Yasmin-Saadia-Faruqi/dp/1684360226/ref=sr_1_1?keywords=meet+yasmin+by+saadia+faruqi&qid=1660245202&sprefix=meet+yas%2Caps%2C135&sr=8-1", 
        reading_level:"K"
    },
    {
        club_name: "Group 6", 
        title: "Mindy Kim and the Yummy Seaweed Business", 
        author: "Lyla Lee", 
        image:"https://images-na.ssl-images-amazon.com/images/I/41xqjRfL4KL._SX334_BO1,204,203,200_.jpg", 
        desc: "Mindy and her dad recently moved to Florida after her mom's death. When the other kids at school make fun of her seaweed snacks at lunch, Mindy and her new friend Sally start a snack business to save money for a puppy.  This doesn't go as planned yet it's a big learning experience showing Mindy to be herself and be proud of her Korean-American culture.", 
        genre: "Realistic Fiction", 
        url: "https://www.amazon.com/Mindy-Kim-Yummy-Seaweed-Business/dp/1534440070/ref=as_li_ss_tl?dchild=1&keywords=mindy+kim+lunar&qid=1598034135&sr=8-3&linkCode=sl1&tag=melitaylonli-20&linkId=e40e765557aada9f74966d96e46e92c9&language=en_US", 
        reading_level:"O"
    },
    {
        club_name: "Group 7", 
        title: "Zoey and Sassafras: Dragons and Marshmallows", 
        author: "Asia Citro", 
        image:"https://images-na.ssl-images-amazon.com/images/I/513vmkFk8eL._SX315_BO1,204,203,200_.jpg", 
        desc: "In the first book of this series, Zoey discovers a glowing photo and learns an amazing secret. Injured magical animals come to their backyard barn for help! When a sick baby dragon appears, it's up to Zoey and Sassafras to figure out what's wrong. Will they be able to help little Marshmallow before it's too late?", 
        genre: "Fantasy", 
        url: "https://www.amazon.com/Dragons-Marshmallows-Zoey-Sassafras-Citro/dp/1943147094/ref=as_li_ss_tl?ie=UTF8&qid=1488906494&sr=8-1&keywords=zoey+sassafras&linkCode=sl1&tag=melitaylonli-20&linkId=9424a19b88b5d056409e2098e71b9076", 
        reading_level:"N"
    },
    {
        club_name: "Group 8", 
        title: "Stink: The Incredible Shrinking Kid", 
        author: "Megan McDonald", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51DZztGAhUL._SX375_BO1,204,203,200_.jpg", 
        desc: "The shortest kid in the second-grade, James Moody, also known as Stink, learns all about the shortest president of the United States, James Madison, when they celebrate Presidents' Day at school.", 
        genre: "Realistic Fiction", 
        url: "https://www.amazon.com/Stink-Incredible-Shrinking-Megan-McDonald/dp/1536213772/ref=sr_1_1?crid=EO2WXINP3MQQ&keywords=stink&qid=1660245296&s=books&sprefix=stink%2Cstripbooks%2C121&sr=1-1", 
        reading_level:"M"
    },
    {
        club_name: "Group 9", 
        title: "Mercy Watson To The Rescue", 
        author: "Kate DiCamillo", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51ax8sAeHfL._SX387_BO1,204,203,200_.jpg", 
        desc: "To Mr. and Mrs. Watson, Mercy is not just a pig — she's a porcine wonder. And to the good-natured Mercy, the Watsons are an excellent source of buttered toast, not to mention that buttery-toasty feeling she gets when she snuggles into bed with them. This is not, however, so good for the Watsons' bed. BOOM! CRACK!", 
        genre: "Humor", 
        url: "https://www.amazon.com/Mercy-Watson-Rescue-Kate-DiCamillo/dp/0763645044/ref=sr_1_1?crid=6R8SPCTIRMSO&keywords=Mercy+Watson+To+The+Rescue.&qid=1660246032&s=books&sprefix=mercy+watson+to+the+rescue%2Cstripbooks%2C226&sr=1-1", 
        reading_level:"L"
    },
    {
        club_name: "Group 10", 
        title: "Fox and Rabbit", 
        author: "Beth Ferry", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51CFmZIO2oL._SX342_BO1,204,203,200_.jpg", 
        desc: "Easygoing Fox and anxious Rabbit seem like opposites, but enjoy a close friendship. In their first graphic novel, the friends have five adventures to explore their favorite things and learn to overcome some of their fears.", 
        genre: "Graphic Novel", 
        url: "https://www.amazon.com/Fox-Rabbit-Book/dp/1419746952/ref=sr_1_1?crid=TWLGYTNPBG86&keywords=Fox+and+Rabbit&qid=1660246495&sprefix=fox+and+rabbit%2Caps%2C113&sr=8-1", 
        reading_level:"L"
    },
    {
        club_name: "Group 11", 
        title: "Stella Diaz Has Something To Say", 
        author: "Angela Dominguez", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51QfFMJVNfL._SX329_BO1,204,203,200_.jpg", 
        desc: "Third-grader Stella is shy and sometimes stumbles over English words...yet also feels uncertain about her Spanish around her Mexican relatives. But family and friends help Stella, and by the end of the year, she feels much more confident about sharing what she has to say.", 
        genre: "Realistic Fiction", 
        url: "https://www.amazon.com/Stella-Diaz-Has-Something-Say/dp/125029410X/ref=sr_1_1?crid=25AUZ3QEDM4J8&keywords=Stella+D%C3%ADaz+Has+Something+to+Say&qid=1660246668&sprefix=stella+d%C3%ADaz+has+something+to+say%2Caps%2C113&sr=8-1", 
        reading_level:"Q"
    },
    {
        club_name: "Group 12", 
        title: "J.D. and the Great Barber Battle", 
        author: "J. Dillard", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51aODwm7XnL._SX329_BO1,204,203,200_.jpg", 
        desc: "When J.D.'s mom gives him an embarrassing haircut, J.D. takes matters into his own hands, with surprisingly good results. Pretty soon he has his own business, which doesn't make the town barber very happy.", 
        genre: "Realistic Fiction", 
        url: "https://www.amazon.com/J-D-Great-Barber-Battle-Dillard/dp/0593111540/ref=sr_1_1?crid=1JQCGT1P9DBH1&keywords=J.D.+and+the+Great+Barber+Battle&qid=1660246781&sprefix=j.d.+and+the+great+barber+battle%2Caps%2C114&sr=8-1", 
        reading_level:"P"
    },
    {
        club_name: "Group 13", 
        title: "The Ember Stone: A Branches Book", 
        author: "Katrina Charman", 
        image:"https://images-na.ssl-images-amazon.com/images/I/51vA5TX8r6L._SX344_BO1,204,203,200_.jpg", 
        desc: "A surprisingly complex animal fantasy for the reading level, in which Tag the owl, Skyla the squirrel, and their somewhat mysterious young firehawk friend seek to save their forest home from the evil vulture Thorn.", 
        genre: "Fantasy", 
        url: "https://www.amazon.com/Ember-Stone-Branches-Book-Firehawk/dp/1338122134/ref=sr_1_1?crid=2FX243YE8MSW6&keywords=The+Ember+Stone&qid=1660246962&sprefix=the+ember+stone+%2Caps%2C123&sr=8-1", 
        reading_level:"O"
    },
])

puts "Adding Memberships..."
10.times do
    Membership.create(
        user_id: User.ids.sample,
        book_club_id: BookClub.ids.sample
    )
end

puts "Done seeding!"