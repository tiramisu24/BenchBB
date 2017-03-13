class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if(@user)
      log_in!(@user)
      render "api/users/show"
    else
      render json: "invalid credentials", status: 422
    end
  end

  def destroy
    if @current_user
      render json: log_out!
    else
      render json: "no user", status: 404
    end

  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :session_token)
  end
end
