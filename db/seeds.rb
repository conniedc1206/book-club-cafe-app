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
    {club_name: "Group 1", title: "Cam Jansen and The Mystery of the Stolen Diamonds", author: "David A. Adler", image:"https://images-na.ssl-images-amazon.com/images/I/51NoroMoyKL._SX326_BO1,204,203,200_.jpg", desc: "Can Cam help catch the diamond thief? Cam and her friend Eric are sitting at the mall when the jewelry store is robbed. Cam sees the thief, but the police arrest the wrong person. Now it's up to Cam to catch the real criminal!", genre: "Mystery", url: "https://www.amazon.com/Cam-Jansen-Mystery-Stolen-Diamonds/dp/0142400106/ref=sr_1_1?crid=3TQWK4NFWM6X5&keywords=Cam+Jansen+and+the+Mystery+of+the+Stolen+Diamonds&qid=1660155378&s=books&sprefix=cam+jansen+and+the+mystery+of+the+stolen+diamonds%2Cstripbooks%2C101&sr=1-1", reading_level:"L"},
    {club_name: "Group 2", title: "Magic Tree House: Dinosaurs Before Dark", author: "Mary Pope Osborn", image:"https://images-na.ssl-images-amazon.com/images/I/51PSLKlvl6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", desc: "Before Jack and Annie can find out, the mysterious tree house whisks them to the prehistoric past. Now they have to figure out how to get home. Can they do it before dark…or will they become a dinosaur's dinner?", genre: "Fantasy", url: "https://www.amazon.com/gp/product/0679824111/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0679824111&linkCode=as2&tag=hannahwilde-20&linkId=6146b6fe2795abdab66754e6a2186bb7", reading_level:"M"},
    {club_name: "Group 3", title: "Because of Winn-Dixie", author: "Kate DiCamillo", image:"https://images-na.ssl-images-amazon.com/images/I/51ZEoen1UKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", desc: "One summer's day, ten-year-old India Opal Buloni goes down to the local supermarket for some groceries—and comes home with a dog. But Winn-Dixie is no ordinary dog. It's because of Winn-Dixie that Opal begins to make friends. And it's because of Winn-Dixie that she finally dares to ask her father about her mother, who left when Opal was three. In fact, as Opal admits, just about everything that happens that summer is because of Winn-Dixie. ", genre: "Realistic Fiction", url: "https://www.amazon.com/Because-Winn-Dixie-Kate-DiCamillo/dp/1536214353/ref=sr_1_1?keywords=because+of+winn+dixie&qid=1660157167&s=books&sprefix=because+of%2Cstripbooks%2C124&sr=1-1", reading_level:"R"},
    # {club_name: "Group 4", title: "", author: "", image:"", desc: "", genre: "", url: "", reading_level:""},
    # {club_name: "Group 5", title: "", author: "", image:"", desc: "", genre: "", url: "", reading_level:""},
    # {club_name: "Group 6", title: "", author: "", image:"", desc: "", genre: "", url: "", reading_level:""},
    # {club_name: "Group 7", title: "", author: "", image:"", desc: "", genre: "", url: "", reading_level:""},
    # {club_name: "Group 8", title: "", author: "", image:"", desc: "", genre: "", url: "", reading_level:""},
    # {club_name: "Group 9", title: "", author: "", image:"", desc: "", genre: "", url: "", reading_level:""},
    # {club_name: "Group 10", title: "", author: "", image:"", desc: "", genre: "", url: "", reading_level:""}  
])

puts "Adding Memberships..."
10.times do
    Membership.create(
        user_id: User.ids.sample,
        book_club_id: BookClub.ids.sample
    )
end

puts "Done seeding!"