10.times do |proposal|
    Proposal.create!(
        customer: "Customer #{proposal}",
        portfolio_url: "http://portfolio.jordanhudgens.com",
        tools: "Ruby on Rails, Angular, Postgres",
        estimated_hours: (80 + proposal),
        hourly_rate: 120,
        weeks_to_complete: 12,
        client_email: 'luis252001@hotmail.com'
    )
end

