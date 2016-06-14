module Matalan
  module Ui
  class Engine < ::Rails::Engine
    config.assets.paths << File.expand_path("../../assets/css", __FILE__)
    config.assets.paths << File.expand_path("../../assets/js", __FILE__)
    config.assets.paths << File.expand_path("../../assets/fonts", __FILE__)
    config.assets.paths << File.expand_path("../../assets/img", __FILE__)
  end
  end
end
