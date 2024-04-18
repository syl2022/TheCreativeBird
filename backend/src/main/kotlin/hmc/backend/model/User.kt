package hmc.backend.model

import org.apache.kafka.common.config.types.Password

data class User(
    var name: String?,
    var email: String,
    var password: Password?
) {
}