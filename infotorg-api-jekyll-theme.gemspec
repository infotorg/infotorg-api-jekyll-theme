# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "infotorg-api-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Volodymyr Chumak"]
  spec.email         = ["coder.ua@gmail.com"]

  spec.summary       = "Jekyll theme for Infotorg API services"
  spec.homepage      = "https://github.com/coderua/infotorg-api-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
