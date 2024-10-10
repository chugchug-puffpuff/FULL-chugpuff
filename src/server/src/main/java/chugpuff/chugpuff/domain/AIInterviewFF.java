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
public class AIInterviewFF {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long AIInterviewFFNo;

<<<<<<< HEAD
    @OneToOne
    @JoinColumn(name = "AIInterviewNo")
=======
    @ManyToOne
    @JoinColumn(name = "AIInterviewNo")
    @JsonBackReference
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
    private AIInterview aiInterview;

    private String f_question;
    private String f_answer;
<<<<<<< HEAD

    @Column(columnDefinition = "LONGTEXT")
    private String f_feedback;
}
=======
}
>>>>>>> ca63ab59f84b3bee18722590476cbe8f39143013
