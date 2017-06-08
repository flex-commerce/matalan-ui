# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "matalan-ui"
  spec.version       = "0.1.3"
  spec.authors       = ["Andy Jones", "Ian Harvey"]
  spec.email         = ["amjgbr@gmail.com", "mail.iharvey@gmail.com"]

  spec.summary       = "UI Kit asset files"
  spec.homepage      = "https://github.com/flex-commerce/ui-bowerdeploy"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|lib)/}) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "rails"
  spec.add_development_dependency "bundler", "~> 1.10"
  spec.add_development_dependency "rake", "~> 10.0"
end
