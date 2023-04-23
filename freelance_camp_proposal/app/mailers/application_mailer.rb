class ApplicationMailer < ActionMailer::Base
  default from: "mailerbot@random.com"
  layout "mailer"
end
