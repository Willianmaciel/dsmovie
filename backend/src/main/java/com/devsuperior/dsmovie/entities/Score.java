package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	
	private ScorePK id = new ScorePK();
	
    @SuppressWarnings("unused")
	private Double value;
    
    public Score() {
    }
    
   public ScorePK getId() {
	   return id;
	   
   }
    
}
