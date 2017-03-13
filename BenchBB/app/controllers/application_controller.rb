class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user



  def current_user
    @current_user = nil
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_in!(user)
    user.reset_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def log_out!
    @current_user.reset_token!
    session[:session_token] = nil
    @current_user
  end

  def log_in?
    @current_user.nil?
  end

  def require_log_in
    unless log_in?
      puts "not logged in"
    end
  end

end
