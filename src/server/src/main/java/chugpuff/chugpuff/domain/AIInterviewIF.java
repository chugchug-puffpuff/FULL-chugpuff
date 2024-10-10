package chugpuff.chugpuff.domain;

<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonBackReference;
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
public class AIInterviewIF {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long AIInterviewIFNo;

    @ManyToOne
    @JoinColumn(name = "AIInterviewNo")
<<<<<<< HEAD
=======
    @JsonBackReference
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
    private AIInterview aiInterview;

    private String i_question;
    private String i_answer;

    @Column(columnDefinition = "LONGTEXT")
    private String i_feedback;
<<<<<<< HEAD
}
=======
}
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
