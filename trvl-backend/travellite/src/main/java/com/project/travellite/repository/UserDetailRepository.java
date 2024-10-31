package com.project.travellite.repository;

import com.project.travellite.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailRepository extends JpaRepository<UserDetails, Long> {
    UserDetails findByUserId(Long userId);
}
