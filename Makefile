# Variables
PROTOC_PLUGIN := protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto
PROTOC_OUTPUT_DIR := --ts_proto_out=.
PROTOC_OPTIONS := --ts_proto_opt=nestJs=true

# Source directories
PROTO_SRC_DIR_USER := ./apps/user-management/src/assets/_proto
PROTO_SRC_DIR_API := ./apps/api-gateaway/src/assets/_proto

# Specify the specific .proto files
PROTO_FILE_USER := $(PROTO_SRC_DIR_USER)/user.proto
PROTO_FILE_API := $(PROTO_SRC_DIR_API)/user.proto

# Targets and rules
user_proto: generate_user_proto
api_proto: generate_apu_proto

generate_user_proto: $(PROTO_FILE_USER)
	$(call generate_proto,$(PROTO_FILE_USER))

generate_api_proto: $(PROTO_FILE_API)
	$(call generate_proto,$(PROTO_FILE_API))

define generate_proto
	$(PROTOC_PLUGIN) $(PROTOC_OUTPUT_DIR) $(1) $(PROTOC_OPTIONS)
endef

.PHONY: user_proto API_proto generate_user_proto generate_api_proto
