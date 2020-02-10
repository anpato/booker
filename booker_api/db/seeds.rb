require 'faker'
num_times = 400
businesses = []

num_times.times do
  businesses <<  Business.create!(name: Faker::Company.unique.name, phone_number: Faker::PhoneNumber.unique.phone_number)
end

num_times.times do
  Employee.create!(name: Faker::Name.unique.name, is_admin: Faker::Boolean.boolean, business_id: businesses[rand(businesses.count)].id)
end

num_times.times do
  Address.create!(
    address_line:Faker::Address.unique.street_address,
    zip_code: Faker::Address.unique.zip,
    city:Faker::Address.unique.city,
    state:Faker::Address.state_abbr,
    cc:Faker::Address.country_code,
    lat:Faker::Address.latitude,
    lng: Faker::Address.longitude,
    business_id: businesses[rand(businesses.count)].id
  )
end


