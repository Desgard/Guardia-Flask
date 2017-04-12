class Api::V1::BaseController < ApplicationController
  # disable the CSRF token
  protect_from_forgery with: :null_session

  # disable cookies (no set-cookies header in response)
  skip_before_action :verify_authenticiy_oken

  def destory_session
    request.session_options[:skip] = true
  end
end
